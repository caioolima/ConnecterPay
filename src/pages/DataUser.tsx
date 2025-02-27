// components/DataUser.tsx

import DataDisplay from "../components/DataDisplay/DataDisplay";
import FooterHome from "../components/DisplayHome/ScreenHome/FooterHome";
import HeaderHome from "../components/DisplayHome/ScreenHome/HeaderHome";

export default function DataUser() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderHome />
            <div className="flex-grow p-8 mt-16 max-w-4xl mx-auto">
                <DataDisplay />
            </div>
            <FooterHome />
        </div>
    );
}
