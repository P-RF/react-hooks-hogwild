import React, { useState } from "react";

function NewHogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved" : ""
  });

  const handleHogChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleHogSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      ...formData,
      weight: parseFloat(formData.weight) || 0
    };
    onAddHog(newHog);
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved" : ""
    });
  };

  return (
    <form onSubmit={handleHogSubmit} className="hog-form">
      <h2>Add a New Hog</h2>
      <input name="name" value={formData.name} onChange={handleHogChange} placeholder="Name" />
      <input name="image" value={formData.image} onChange={handleHogChange} placeholder="Image URL" />
      <input name="specialty" value={formData.specialty} onChange={handleHogChange} placeholder="Specialty" />
      <input name="weight" value={formData.weight} onChange={handleHogChange} type="number" placeholder="Weight" />
      <label>
        <input name="greased" type="checkbox" checked={formData.greased} onChange={handleHogChange} />
        Greased
      </label>
      <input name="highest medal achieved" value={formData["highest medal achieved"]} onChange={handleHogChange} placeholder="Medal" />
      <button type="submit">Add Hog</button>
    </form>
  )
}

export default NewHogForm;