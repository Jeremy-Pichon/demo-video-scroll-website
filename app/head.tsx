import { data } from "@/data";

export default function Head() {
  return (
    <>
      <title>{ data.head.title }</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={ data.head.description } />
    </>
  )
}
