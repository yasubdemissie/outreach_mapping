import propType from "prop-types";

// import { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

const StyledForm = styled.form`
  height: 100vh;
  width: 30vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
  transition: transform 0.5s ease-in-out;
  ${({ isVisible }) =>
    !isVisible &&
    css`
      transform: translateX(-100%);
    `}
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  /* width: 100%; */
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

function Form({ isVisible, onToggle }) {
  // const [isVisible, setIsVisible] = useState(true);
  // const ref = useClickOutside(() => onToggle(true));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      ...data,
      name: data.name,
      description: data.description,
      time: data.time,
      distance: +data.distance,
      file: null,
    };
    console.log(newData);
  };

  const handleClose = () => {
    onToggle(false);
  };

  return (
    <StyledForm
      className="w-dvw grid col-span-2"
      // ref={ref}
      onSubmit={handleSubmit(onSubmit)}
      isVisible={isVisible}
    >
      <CloseButton onClick={handleClose}>&times;</CloseButton>
      <FormGroup>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          placeholder="Enter your first name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          placeholder="Enter your last name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <ErrorMessage>This field is required</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="time">Time</Label>
        <Input
          type="time"
          id="time"
          {...register("time", { required: true })}
        />
        {errors.time && <ErrorMessage>This field is required</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="file">Image & Video</Label>
        <Input
          type="file"
          id="file"
          multiple
          {...register("file", { required: true })}
        />
        {errors.file && <ErrorMessage>This field is required</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter a description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="distance">Distance</Label>
        <Input
          type="text"
          id="distance"
          placeholder="Enter the distance"
          {...register("distance", { required: true })}
        />
        {errors.distance && <ErrorMessage>This field is required</ErrorMessage>}
      </FormGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
    </StyledForm>
  );
}

Form.propTypes = {
  isVisible: propType.bool,
  onToggle: propType.func,
};

export default Form;
