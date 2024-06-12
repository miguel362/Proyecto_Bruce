import HeaderLayout from '@/Layouts/HeaderLayout';
import NavLayoutNotHome from './NavLayoutNotHome';
import MainHomeLayout from '@/Layouts/MainHomeLayout';
import FooterLayout from './FooterLayout';

export default function LayoutRoot({children}){
    return(
        <>
            <HeaderLayout/>

            <NavLayoutNotHome />

            <MainHomeLayout>
                {children}
            </MainHomeLayout>

            <FooterLayout /> 
        </>
    )
}