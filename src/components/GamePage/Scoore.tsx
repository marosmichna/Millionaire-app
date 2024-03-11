import { useSelector } from "react-redux";
import { RootState } from "../../state/store";


const Scoore = () => {

  const userName = useSelector((state: RootState) => state.userName.userName);

  return (
    <div>
        <div className="flex sm:h-screen sm:flex-col sm:justify-between px-8">
            <div>{userName}</div>
            <div>
                Scoore
            </div>
        </div>
    </div>
  )
}

export default Scoore;
