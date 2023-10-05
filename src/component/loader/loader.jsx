import { BeatLoader } from "react-spinners";
import checkRerender from "../../helpers/checkRerender";

export default function Loader() {
    checkRerender("Loader")
    
    return(
        <div>
            <BeatLoader color="#36d7b7" />
            <p className="text-center">در حال گرفتن داده ها</p>
        </div>
    )
};
