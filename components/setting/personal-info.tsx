import PersonalInfoForm from "./personal-info-form";

export default function PersonalInfo() {
  return (
    <section className="flex flex-col items-start justify-between gap-8 border-b py-5 md:flex-row">
      <div className="">
        <h2 className="text-lg font-semibold">Personal Information </h2>
        <p className="text-muted-foreground">Shown on your public profile</p>
      </div>

      <PersonalInfoForm />
    </section>
  );
}
