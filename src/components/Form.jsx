import propType from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled, { css } from "styled-components";
import formApi from "../Api/formApi";

const StyledForm = styled.form`
  width: 40vw;
  height: 100vh;
  overflow-y: scroll;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  transition: transform 0.5s ease-in-out;
  ${({ isVisible }) =>
    !isVisible &&
    css`
      transform: translateX(0%);
    `}
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
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
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
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

function Form({ isVisible, onClose, position }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (position === null) {
      toast.error("Please Select a position");
      return;
    }
    const newData = {
      ...data,
      distance: +data.distance,
      file: [...data.file],
      location: position,
    };

    formApi.createNewForm(newData);

  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} isVisible={isVisible}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <FormGroup>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          {...register("name", { required: true })}
        />
        {errors.name && <ErrorMessage>This field is required</ErrorMessage>}
      </FormGroup>
      {/* <FormGroup>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          placeholder="Enter your last name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <ErrorMessage>This field is required</ErrorMessage>}
      </FormGroup> */}
      <FormGroup>
        <Label htmlFor="time">Date </Label>
        <Input
          type="date"
          id="time"
          {...register("time", { required: true })}
        />
        {errors.time && <ErrorMessage>This field is required</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="EnvangMethod">Methodolgy</Label>
        <Input
          type="text"
          id="EnvangMethod"
          placeholder="Envangelism Methodolgy"
          {...register("EnvangMethod", { required: true })}
        />
        {errors.EnvangMethod && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="time">Total People</Label>
        <Input
          type="number"
          id="total"
          {...register("total", { required: true })}
        />
        {errors.total && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="time">Saved People</Label>
        <Input
          type="number"
          id="savedPeople"
          {...register("savedPeople", { required: true })}
        />
        {errors.savedPeople && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
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
      {/* <FormGroup>
        <Label htmlFor="distance">Distance</Label>
        <Input
          type="text"
          id="distance"
          placeholder="Enter the distance"
          {...register("distance", { required: true })}
        />
        {errors.distance && <ErrorMessage>This field is required</ErrorMessage>}
      </FormGroup> */}
      <SubmitButton type="submit">Submit</SubmitButton>
    </StyledForm>
  );
}

Form.propTypes = {
  isVisible: propType.bool,
  onClose: propType.func,
  position: propType.object,
};

export default Form;
