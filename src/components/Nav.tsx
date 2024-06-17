import { FaArrowLeft, FaArrowRight, FaCircle, FaScroll } from "react-icons/fa";
import CarouselInfo from "../utilities/carousel";
import { Carousel } from "@mantine/carousel";
import { Button } from "react-bootstrap";

function Navbar() {
  return (
    <div>
      <div className="d-flex justify-content-between p-3">
        <div className="d-flex align-items-center text-white">
          <FaCircle className="active" />
          &nbsp;239
        </div>
        <FaScroll className="c-grey" />
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
            <div className="m-2 p-2 bg-191827 bd-rounded-12" key={idx}>
              <div className="d-flex justify-content-between c-726b8d">
                <div>{ele.entries}</div>
                <div>{ele.feg}</div>
              </div>
              <Carousel
                nextControlIcon={<FaArrowRight />}
                previousControlIcon={<FaArrowLeft />}
                height={150}
              >
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
                                  width={80}
                                />
                                <div className="">
                                  <p className="my-1 mx-2 text-white">
                                    {e.name}
                                  </p>
                                  <p className="my-1 mx-2 active">{e.value}</p>
                                  <p className="my-1 mx-2 c-726b8d">{e.time}</p>
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="red"
                              className="col-10 d-block block-center"
                            >
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
