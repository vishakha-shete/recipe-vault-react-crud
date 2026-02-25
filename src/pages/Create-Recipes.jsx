import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const CreateRecipe = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-xl ">
      <h2 className="text-2xl font-bold mb-6 text-center text-rose-500">
        Create New Recipe
      </h2>

      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">

        {/* Title */}
        <input
          type="text"
          placeholder="Recipe Title"
          className="border p-2 rounded"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        {/* Description */}
        <textarea
          placeholder="Description"
          className="border p-2 rounded"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}

        {/* Category */}
        <select
          className="border p-2 rounded bg-gray-800"
          {...register("category", { required: "Category is required" })}
        >
          <option value="">Select Category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snacks">Snacks</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}

        {/* Price */}
        <input
          type="number"
          placeholder="Price (₹)"
          className="border p-2 rounded"
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be greater than 0" },
          })}
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}

        {/* Image URL */}
        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 rounded"
          {...register("image", { required: "Image URL is required" })}
        />

        {/* Ingredients */}
        <textarea
          placeholder="Ingredients"
          className="border p-2 rounded"
          {...register("ingredients", { required: true })}
        />

        {/* Procedure */}
        <textarea
          placeholder="Procedure"
          className="border p-2 rounded"
          {...register("procedure", { required: true })}
        />

        <button
          type="submit"
          className="bg-rose-500 cursor-pointer text-white py-2 rounded-lg hover:bg-rose-600 transition"
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;