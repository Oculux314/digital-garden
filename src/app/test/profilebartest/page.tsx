import ProfileBar from "@/components/composite components/profileBar";

export default function ExampleTest() {
  const profiles = [
    {src: "https://lh3.googleusercontent.com/a/ACg8ocIFfj12gKB7rxjhU3ygzXKsJjAOsdopnhHzuzeSdQRYLIUoJ6HE=s96-c", name: "name", url: "url"},
    {src: "https://lh3.googleusercontent.com/a/ACg8ocIFfj12gKB7rxjhU3ygzXKsJjAOsdopnhHzuzeSdQRYLIUoJ6HE=s96-c", name: "name", url: "url"},
    {src: "https://lh3.googleusercontent.com/a/ACg8ocIFfj12gKB7rxjhU3ygzXKsJjAOsdopnhHzuzeSdQRYLIUoJ6HE=s96-c", name: "name", url: "url"},
    {src: "https://lh3.googleusercontent.com/a/ACg8ocIFfj12gKB7rxjhU3ygzXKsJjAOsdopnhHzuzeSdQRYLIUoJ6HE=s96-c", name: "name", url: "url"},
    {src: "https://lh3.googleusercontent.com/a/ACg8ocIFfj12gKB7rxjhU3ygzXKsJjAOsdopnhHzuzeSdQRYLIUoJ6HE=s96-c", name: "name", url: "url"},
    {src: "https://lh3.googleusercontent.com/a/ACg8ocIFfj12gKB7rxjhU3ygzXKsJjAOsdopnhHzuzeSdQRYLIUoJ6HE=s96-c", name: "name", url: "url"},
    {src: "https://lh3.googleusercontent.com/a/ACg8ocIFfj12gKB7rxjhU3ygzXKsJjAOsdopnhHzuzeSdQRYLIUoJ6HE=s96-c", name: "name", url: "url"},
  ]
  return <ProfileBar profiles={profiles}/>;
}
