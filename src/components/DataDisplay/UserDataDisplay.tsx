import { CakeIcon, MailIcon, PhoneIcon, UserIcon } from "lucide-react";
import { UserData } from "@/services/types";

interface UserDataDisplayProps {
  userData: UserData;
}

const UserDataDisplay = ({ userData }: UserDataDisplayProps) => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-6 flex items-center space-x-3 mt-16">
        <UserIcon className="h-6 w-6 text-primary" />
        <span className="text-black">Dados do Usuário</span>
      </h2>
      <div className="space-y-6">
        <UserInfo icon={UserIcon} label="Nome" value={userData.nome} />
        <UserInfo icon={MailIcon} label="Email" value={userData.email} />
        <UserInfo icon={PhoneIcon} label="Telefone" value={userData.telefone} />
        <UserInfo icon={CakeIcon} label="Data de Nascimento" value={userData.dataNascimento} />
      </div>
    </div>
  );
};

const UserInfo = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-center space-x-3">
    <Icon className="h-5 w-5 text-primary" />
    <p className="text-base text-black">
      <strong>{label}:</strong> {value}
    </p>
  </div>
);

export default UserDataDisplay;
