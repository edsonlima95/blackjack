import { FaCircle } from "react-icons/fa";
import Roll from "../assets/roll.svg";
import CarouselInfo from "../utilities/carousel";
import { Carousel } from "@mantine/carousel";
import { Button } from "react-bootstrap";

function Navbar() {
  return (
    <div>
      <div className="d-flex justify-content-between p-3">
        <div>
          <FaCircle />
          239
        </div>
        <img src={Roll} alt="" />
      </div>

      {CarouselInfo.map(
        (
          ele: {
            no: number;
            entries: string;
            feg: string;
            info: {
              imgSrc: string;
              name: string;
              value: string;
              time: string;
            }[];
          },
          idx: number
        ) => {
          return (
            <div className="m-2 p-2 bg-white bd-rounded-12" key={idx}>
              <div className="d-flex justify-content-between">
                <div>{ele.entries}</div>
                <div>{ele.feg}</div>
              </div>
              <Carousel height={150}>
                {ele.info.map(
                  (
                    e: {
                      imgSrc: string;
                      name: string;
                      value: string;
                      time: string;
                    },
                    i: number
                  ) => {
                    return (
                      <Carousel.Slide key={i}>
                        {
                          <>
                            <div className="col-8 block-center">
                              <div className="d-flex justify-content-center py-2 align-items-center">
                                <img
                                  className=""
                                  src={e.imgSrc}
                                  alt=""
                                  srcSet=""
                                />
                                <div className="">
                                  <p className="my-1 mx-2">{e.name}</p>
                                  <p className="my-1 mx-2">{e.value}</p>
                                  <p className="my-1 mx-2">{e.time}</p>
                                </div>
                              </div>
                            </div>
                            <Button className="col-10 d-block block-center">
                              Join
                            </Button>
                          </>
                        }
                      </Carousel.Slide>
                    );
                  }
                )}
              </Carousel>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Navbar;

// <Carousel withIndicators height={200}>
//   {CarouselInfo.map(
//     (
//       ele: {
//         no: number;
//         entries: string;
//         feg: string;
//         info: {
//           imgSrc: string;
//           name: string;
//           value: string;
//           time: string;
//         }[];
//       },
//       idx: number
//     ) => {
//       return <Carousel.Slide key={idx}>{"asdfdf"}</Carousel.Slide>;
//     }
//   )}
//   {/* ...other slides */}
// </Carousel>
