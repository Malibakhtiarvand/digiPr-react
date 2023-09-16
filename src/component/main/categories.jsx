import Mobile from "../../assets/mobile.webp";
import checkRerender from "../../helpers/checkRerender";

export default function Categories() {
  checkRerender("categories")
  return (
    <div className="mt-4">
      <h2>دسته بندی ها</h2>

      <div className="d-flex justify-content-center flex-wrap" style={{columnGap: "80px",rowGap: "40px"}}>
        <div>
          <img height="100px" width="100px" src={Mobile} alt="mobile" />
          <p className="text-center text-success">موبایل</p>
        </div>

        <div>
          <img height="100px" width="100px" src={Mobile} alt="mobile" />
          <p className="text-center text-success">موبایل</p>
        </div>

        <div>
          <img height="100px" width="100px" src={Mobile} alt="mobile" />
          <p className="text-center text-success">موبایل</p>
        </div>

        <div>
          <img height="100px" width="100px" src={Mobile} alt="mobile" />
          <p className="text-center text-success">موبایل</p>
        </div>

        <div>
          <img height="100px" width="100px" src={Mobile} alt="mobile" />
          <p className="text-center text-success">موبایل</p>
        </div>

        <div>
          <img height="100px" width="100px" src={Mobile} alt="mobile" />
          <p className="text-center text-success">موبایل</p>
        </div>

        <div>
          <img height="100px" width="100px" src={Mobile} alt="mobile" />
          <p className="text-center text-success">موبایل</p>
        </div>

        <div>
          <img height="100px" width="100px" src={Mobile} alt="mobile" />
          <p className="text-center text-success">موبایل</p>
        </div>
      </div>
    </div>
  );
}
