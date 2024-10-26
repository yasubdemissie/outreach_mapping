import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = {...data,
      "name": data.name,
      "description": "data.description",
      "time": data.time,
      "distance": +data.distance,
      "file": "null",
      "total": 300,
      "saved": 20,
      "location": data.location,
    };
    console.log(newData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-yellow-300 absolute left-0 top-0 bottom-0 h-dvh">
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          {...register("name", { required: true })}
        />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="saved">saved: </label>
        <input
          type="number"
          id="saved"
          {...register("saved", { required: true })}
        />
        {errors.lastName && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="listener">Listener Number: </label>
        <input
          type="number"
          id="listener"
          {...register("total", { required: true })}
        />
        {errors.listener && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          id="location"
          {...register("location", { required: true })}
        />
        {errors.location && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="time">Time: </label>
        <input
          type="time"
          id="time"
          {...register("time", { required: true })}
        />
        {errors.time && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="file">Image & Video: </label>
        <input
          type="file"
          id="file"
          multiple
          {...register("file", { required: true })}
        />
        {errors.file && <span>This field is required</span>}
      </div>
      {/* <div>
        <label htmlFor="description">Description: </label>
        <textarea
          type="text"
          id="description"
          {...register("description", { required: true })}
        />
        {errors.description && <span>This field is required</span>}
      </div> */}
      <div>
        <label htmlFor="distance">Distance:</label>
        <input id="distance" {...register("distance", { required: true })} />
        {errors.distance && <span>This field is required</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
