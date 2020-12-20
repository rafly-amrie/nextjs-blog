import Image from "next/image";
import Navbar from "./parts/navbar/navbar";

export default function About() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <h1 className="h1-title">Profile</h1>
        <div className="navigasi">
          <p className="p-navigasi">Home /</p>
          <p className="p-navigasi-active"> About</p>
        </div>
        <div className="about">
          <div className="img_wrapper">
            <Image
              src="/assets/image/sacre4.jpeg"
              layout="responsive"
              width={500}
              height={425}
            />
          </div>
          <div className="text_wrapper">
            <h1 className="title_about">Introduce our brand</h1>
            <p className="content_about">
              sacrè
              <br /> [sa:kre] noun
              <br /> suci • yang dipersembahkan
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
