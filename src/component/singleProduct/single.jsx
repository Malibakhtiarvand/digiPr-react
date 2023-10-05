import { useEffect, useState } from "react";
import { useParams } from "react-router";
import checkRerender from "../../helpers/checkRerender";
import { GetHttpMethod } from "../../helpers/services/httpsMethos";
import style from "./single.module.css";
console.log(style);

export default function Single() {
  checkRerender("Single");
  const [data, setData] = useState(null);
  const [time, setTime] = useState({ day: 2, hours: 10, second: 20 });
  const prId = useParams();

  async function getDaTa() {
    console.log(prId.id);
    const { data } = await GetHttpMethod(prId.id);
    setData(data);
  }
  useEffect(() => {
    getDaTa();
  }, []);

  setInterval(() => {
    var time = new Date().getTime();
    console.log(time / 1000);
    // var timer = time.second;
    // const hours = Math.floor(timer / 3600);
    // const minute = (timer - hours * 3600) / 60;
    // const second = timer - (hours * 3600 + minute * 60);
    // console.log(second);
    // const newTime = `${hours}:${minute}:${second}`;
    // setTime({ show: newTime,second: timer-- });
  }, 1000);

  return (
    <div className={"container " + style.singlePr}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>
          تخفیفات ویژه تا <span>{time.show}</span>دیگر
        </p>
        <img
          className={style["pr-img"]}
          src={data?.image}
          alt={data?.title.substring(10)}
        />
        <p className="text-center mt-3">{data?.title.substring(0, 30)}</p>
      </div>

      <div
        style={{ backgroundColor: "tomato", borderRadius: "10px" }}
        className={"p-3 mb-4 " + style.data}
      >
        <h5>
          رنگ: <span style={{ color: "gray" }}>خاکستری</span>
        </h5>
        <p style={{ fontSize: "11pt" }}>
          ۹۲% (۱۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند{" "}
          <span className="fa fa-thumbs-up text-info"></span>
        </p>
      </div>
    </div>
  );
}
