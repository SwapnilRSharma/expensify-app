console.log("App.js is running!");

const appRoot = document.getElementById("app");


const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: ['One', 'Two', 'Three'],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option)
    e.target.elements.option.value = ''
  }
  render()
}

const onRemoveAll = () => {
  app.options = []
  render()
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNumber]
  alert(option)
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What shoould I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li> )}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render()