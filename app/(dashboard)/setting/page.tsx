import ChangePassword from "@/components/setting/change-password";
import DeleteAccount from "@/components/setting/delete-account";
import PersonalInfo from "@/components/setting/personal-info";
import PageHeader from "@/components/shared/page-header";

export default function SettingPage() {
  return (
    <>
      <PageHeader
        title="Setting"
        description="Update and personalize your account settings."
      />

      <div className="mx-auto w-full max-w-5xl">
        <PersonalInfo />

        <ChangePassword />

        <DeleteAccount />
      </div>
    </>
  );
}
