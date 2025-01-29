import DeleteAccountModal from "./delete-account-modal";

export default function DeleteAccount() {
  return (
    <section className="flex flex-col items-start justify-between gap-8 py-5 md:flex-row">
      <div className="">
        <h2 className="text-lg font-semibold">Delete your account</h2>
        <p className="text-muted-foreground">
          Permanently remove all your data, including documents, chats, and
          personal information.
        </p>
      </div>

      <DeleteAccountModal />
    </section>
  );
}
