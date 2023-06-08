import React, {useEffect,useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { wait } from "@testing-library/user-event/dist/utils";
import { delay } from "framer-motion";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const handle=(values)=>{
      submit("url", values)
  }

  useEffect(() => {
    console.log("Response updated:", response);
    response!=undefined&&makeAlert(response.message, response.type)
  }, [response]);

  useEffect(()=>{
    formik.touched.firstName=false;
    formik.touched.email=false;
  },[])

  const makeAlert = (message, type) => {
    onOpen(type, message)
  }

  const formik = useFormik({
    initialValues: {
      firstName:"",
      email:"",
      type:"",
      comment:""
    },
    onSubmit: (values) => {
      handle(values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("required field"),
      email: Yup.string().required("required field"),
      type: Yup.string().required("required"),
      comment: Yup.string().required("required")
    })
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%" >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName&&formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName&&formik.errors.firstName&&(<FormErrorMessage name="firstName">required</FormErrorMessage>)}
              </FormControl>
              <FormControl isInvalid={formik.errors.email&&formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email&&(<FormErrorMessage name="email">required</FormErrorMessage>)}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" onChange={formik.handleChange} value={formik.values.type}>
                  <option>Choose an option</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment&&formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                {formik.touched.comment && formik.errors.comment &&( <FormErrorMessage name="comment">required</FormErrorMessage> )}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                {isLoading?(<p>Loading...</p>):(<p>Submit</p>)}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
