const Form = ({ handleInput, inputData, handleSubmit }) => {
  return (
    <form>
      <h1>Form Input</h1>
      <div class="input-container">
        <input
          name="taskTitle"
          placeholder="Task title*"
          value={inputData.taskTitle}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div class="input-container">
        <textarea
          name="taskDescription"
          placeholder="Task description*"
          onChange={(e) => handleInput(e)}
          value={inputData.taskDescription}
        />
      </div>
      <div>
        <input onClick={handleSubmit} value="Create task" />
      </div>
    </form>
  );
};

export default Form;
