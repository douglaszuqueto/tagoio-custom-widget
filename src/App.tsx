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
      <div>Hello</div>
    </>
  );
}

export default App;
