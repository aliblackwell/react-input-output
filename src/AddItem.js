import React from 'react';

const AddItem = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedItem = {
      title: event.target[0].value,
      description: event.target[1].value
    }
    props.handleNewFeedItem(newFeedItem);
  }


  return (
    <div className="AddItem">
      <h2>Add a new item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Enter a title:</label>
        <input type="text" name="title" />
        <label htmlFor="description">Enter a description:</label>
        <textarea name="description"></textarea>
        <button>Submit form</button>
      </form>
    </div>
  )
}

export default AddItem;