import { useForm } from "react-hook-form";
import TextInput from "../../components/textInput/TextInput";
import { H1 } from "../../components/ui/H1";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { setUserName } from "../../state/userName/userNameSlice";

interface FildValue {
    userName: string,
}

const WelcomePage = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<FildValue>();

  const dispatch = useDispatch<AppDispatch>();
  const userName = useSelector((state: RootState) => state.userName.userName);

  const onSubmit = (data: FildValue) => {
    console.log(data)
    dispatch(setUserName(data.userName));
  }

  return (
    <div className="h-screen flex justify-center items-center">
        <div className="bg-blue-600 opacity-50 hover:opacity-90 px-3 py-5">
            <div>
             <H1 className="text-white hover:text-blue-200">Vitajte v hre Milionár</H1>
            </div>
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="text-center"
            >
                <TextInput 
                    name="userName"
                    label="Používateľské meno"  
                    register={register}
                    error={errors.userName}
                />
                <button 
                  className="bg-blue-200 py-2 px-4 rounded-md font-medium" 
                  type="submit"
                >
                  Submit
                </button>
            </form>       
        </div>    
    </div>
  )
}

export default WelcomePage;
