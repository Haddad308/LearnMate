import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import lockIcon from "../../assets/Icons/Frame 14.svg";
import userIcon from "../../assets/Icons/Frame 16.svg";

const Login = () => {
    const formHandler = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('عنوان البريد الإلكتروني غير صحيح').required('مطلوب'),
            password: Yup.string().required('مطلوب'),
        }),
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
        },
    });

    return (
        <form onSubmit={formHandler.handleSubmit} className="font-cairo flex flex-col justify-center items-end w-2/4" >
            <h1 className="font-bold text-[26px] leading-10"  >مرحباً بعودتك!</h1>
            <p className="font-normal text-[18px] leading-9 mb-4" >قم بتسجيل الدخول</p>
            <Input
                status={(formHandler.touched.email && formHandler.errors.email) ? "error" : ""}
                id="email"
                name="email"
                size="large"
                placeholder="اسم المستخدم"
                className={(formHandler.touched.email && formHandler.errors.email) ? "mb-1" : "mb-3"}
                prefix={<img src={lockIcon} alt="lockIcon" />}
                onChange={formHandler.handleChange}
                onBlur={formHandler.handleBlur}
                value={formHandler.values.email}
            />
            {formHandler.touched.email && formHandler.errors.email ? <div className="mb-2 text-red-600">{formHandler.errors.email}</div> : null}

            <Input
                status={(formHandler.touched.password && formHandler.errors.password) ? "error" : ""}
                id="password"
                name="password"
                size="large"
                placeholder="كلمة السر"
                className={(formHandler.touched.password && formHandler.errors.password) ? "mb-1" : "mb-4"}
                prefix={<img src={userIcon} alt="userIcon" />}
                type="password"
                onChange={formHandler.handleChange}
                onBlur={formHandler.handleBlur}
                value={formHandler.values.password}
            />
            {formHandler.touched.password && formHandler.errors.password ? <div className="mb-2 text-red-600">{formHandler.errors.password}</div> : null}

            <Button
                htmlType="submit"
                className="w-full mb-1  bg-gradient-to-r from-sky-500 to-indigo-500  text-white"
                size="large"
            >
                تسجيل الدخول
            </Button>
            <Link className="self-start" to={"/auth/forget"}>
                <p className="text-[13px] transition-all duration-300 font-semibold  cursor-pointer hover:text-indigo-500">هل نسيت كلمة السر؟</p>
            </Link>
        </form>
    );
};

export default Login;
