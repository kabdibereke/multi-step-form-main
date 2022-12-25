import { useForm } from "react-hook-form";

import { FormContext, IYourInfo } from '../../types/types'
import styles from './YourInfo.module.scss'
import InputMask from "react-input-mask";
import { useContext } from "react";
import { FormContexts } from "../../store/context";
interface YourInfoProps extends IYourInfo {}


const YourInfo = () => {
    const {onActive, idRight, name, setName, email,setEmail, phone, setPhone} =useContext(FormContexts) as FormContext;
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<YourInfoProps>();
      
  const onSubmit = () => {
        onActive(idRight+1)
  };
  return (
    <div className={styles.main}>
        <h2 >Personal Info</h2>
        <p>Please Provide your name, email address, and number</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputWrapper}>
                <label>Name</label>
                <input
                    {...register("name", {
                    required: true,
                    maxLength: 20,
                    
                    })}
                    placeholder="Name"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)}
                    value={name}
                />
                {errors?.name?.type === "required" && <p className={styles.error}>This field is required</p>}
                {errors?.name?.type === "maxLength" && (
                    <p className={styles.error}>First name cannot exceed 20 characters</p>
                )}
                
            </div>

           <div className={styles.inputWrapper}>
                <label>Email Address</label>
                <input 
                    {...register("email", {
                    required: true, 
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} 
                    placeholder="Email"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
                    value={email}/>
                {errors?.email?.type === "required" && (<p className={styles.error}>This field is required</p>)}
                {errors?.email?.type === "pattern" && (<p className={styles.error}>Email Address is required</p>)}
            
           </div>

           <div className={styles.inputWrapper}>
            <label>Phone Number</label>
                
                <InputMask
                    mask="+9(999)-999-99-99"
                    {...register("phoneNumber", {
                    required: true,
                    })}
                    placeholder="e.g +9(999)-999-99-99"
                    value={phone}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPhone(e.target.value)}
                /> 
                {errors?.name?.type === "required" && <p className={styles.error}>This field is required</p>}
           </div>
            <button type='submit' className={styles.yourInfoButton}>Next Step</button>
        </form>
    </div>
  )
}

export default YourInfo