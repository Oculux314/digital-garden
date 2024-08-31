// Go to /test/example to see the result
import InfoComponent from "@/components/info";

export default function ExampleTest() {
  return <InfoComponent />;
}

function MyComponent() {
  const myVar = "This is a variable";

  return <p>{myVar}</p>;
}
