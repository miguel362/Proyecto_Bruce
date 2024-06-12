import HeaderLayout from '@/Layouts/HeaderLayout';
import NavLayoutHome from './NavLayoutHome';
import MainHomeLayout from '@/Layouts/MainHomeLayout';
import FooterLayout from './FooterLayout';

export default function LayoutHome({children}){
    return(
        <>
            <HeaderLayout />

            <NavLayoutHome />

            <MainHomeLayout>
                {children}
            </MainHomeLayout>

            <FooterLayout /> 
        </>
    )
}