import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.TagoIO) {
      window.TagoIO.ready({});

      window.TagoIO.onStart((data) => {
        console.log({ start: data });
      });

      window.TagoIO.onRealtime((data) => {
        console.log({ realtime: data });
      });
    }
  }, []);

  return (
    <>
      <h1>TagoIO Custom Widget Template</h1>
    </>
  );
}

export default App;
