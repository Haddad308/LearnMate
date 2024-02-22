import { Button, Input } from "antd"
import email from "../../assets/Icons/email.svg"
import { useFormik } from "formik";
import * as Yup from 'yup';

const ForgotPassword = () => {


    const formHandler = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('عنوان البريد الإلكتروني غير صحيح').required('مطلوب'),
        }),
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
        },
    });


    return (
        <form onSubmit={formHandler.handleSubmit} className="font-cairo flex flex-col justify-center items-end w-2/4">
            <h1 className="font-bold text-[26px] leading-10"  >نسيت كلمة السر؟</h1>
            <p dir="rtl" className="font-normal text-[18px] leading-9 mb-6" >سوف يتم إرسال رابط على بريدك الإلكتروني من أجل إعادة تعيين الرقم السري.  </p>
            <Input
                status={(formHandler.touched.email && formHandler.errors.email) ? "error" : ""}
                id="email"
                name="email"
                size="large"
                placeholder="اسم المستخدم"
                className={(formHandler.touched.email && formHandler.errors.email) ? "" : "mb-4"}
                onChange={formHandler.handleChange}
                onBlur={formHandler.handleBlur}
                value={formHandler.values.email.trim()}
                prefix={
                    <img src={email} alt="lockIcon" />
                } />
            {formHandler.touched.email && formHandler.errors.email ? <div className="mb-2 text-red-600">{formHandler.errors.email}</div> : null}
            <Button
                htmlType="submit"
                className="w-full mb-1  bg-gradient-to-r from-sky-500 to-indigo-500  text-white"
                color="primary"
                size={'large'}>
                تحقق
            </Button>
        </form>
    )
}

export default ForgotPassword
