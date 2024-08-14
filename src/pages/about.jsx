import { Outlet } from "react-router-dom"

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod cum dicta, et possimus quisquam perferendis ea vitae velit. Fugit eveniet, consequatur vero enim corrupti cupiditate debitis quisquam atque sint pariatur.</p>
      <Outlet />
    </>
  )
}

export default AboutPage