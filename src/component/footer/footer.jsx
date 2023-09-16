import checkRerender from "../../helpers/checkRerender";

export default function Footer() {
  checkRerender("footer");

  return (
    <footer style={{ borderTop: "5px gray solid" }}>
      <h3 className="text-danger">DIGI PR</h3>

      <div className="d-flex" style={{ columnGap: "10px" }}>
        <p>
          تلفن پشتیبانی: <span>92042394238</span>
        </p>
        <div>|</div>
        <p>مرجع بزرگ خرید و فروش کالا</p>
      </div>

      <div className="d-grid footerItems">
        <div className="footerItemDiv">
          <h4>با ما</h4>

          <ul>
            <li>لورم لورم</li>
            <li>لورم لورم</li>
            <li>لورم لورم</li>
          </ul>
        </div>

        <div className="footerItemDiv">
          <h4>با ما</h4>

          <ul>
            <li>لورم لورم</li>
            <li>لورم لورم</li>
            <li>لورم لورم</li>
          </ul>
        </div>

        <div className="footerItemDiv">
          <h4>با ما</h4>

          <ul>
            <li>لورم لورم</li>
            <li>لورم لورم</li>
            <li>لورم لورم</li>
          </ul>
        </div>

        <div className="footerItemDiv">
          <h4>با ما</h4>

          <ul>
            <li>لورم لورم</li>
            <li>لورم لورم</li>
            <li>لورم لورم</li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}
