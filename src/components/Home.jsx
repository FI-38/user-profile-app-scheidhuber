
function Home(props) {

  function test () {
      const a = 3 + 56
      console.log(a)
  }

  return (
    <>
      <h1 className="mb-4">Willkommen auf der Home-Seite</h1>
            <h2>Titel: { props.title ? props.title: "Titel nicht vorhanden" }</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </>
  );
}

export default Home;
