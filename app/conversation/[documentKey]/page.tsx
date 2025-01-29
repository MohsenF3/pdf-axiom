import ConversationMessages from "@/components/conversation/conversation-messages";
import DocumentsListItem from "@/components/documents/documents-list-item";
import PdfView from "@/components/documents/pdf-view";
import Error from "@/components/shared/error";
import { Button } from "@/components/ui/button";
import { IconFile } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { notFound, redirect } from "next/navigation";
import { getDocumentByKey } from "../actions";

interface ConversationPageProps {
  params: {
    documentKey: string;
  };
}

export default async function ConversationPage({
  params: { documentKey },
}: ConversationPageProps) {
  const { status, data, message } = await getDocumentByKey(documentKey);

  // check user is logged in or not
  if (status === 401) {
    redirect("/login");
    return;
  }

  if (status === 500) {
    return <Error message={message} />;
  }

  // if no document found, return 404
  if (!data) {
    notFound();
  }

  return (
    <>
      <div className="flex h-full w-full flex-col justify-between gap-5 p-4 lg:w-1/2 lg:p-8">
        <div className="flex flex-col gap-5 overflow-y-auto pr-2">
          {messages.map((message) => (
            <ConversationMessages
              key={message.id}
              role={message.role}
              message={message.message}
            />
          ))}
        </div>

        <div className="mb-12 h-auto w-full lg:mb-10">
          <Input
            className="h-full w-full py-6"
            type="text"
            placeholder="Ask a question about your document"
          />
        </div>
      </div>

      <PdfView url={data.pdfUrl} className="hidden w-1/2 lg:block" />
      <div className="block lg:hidden">
        <DocumentsListItem
          createdAt={data.createdAt}
          pdfName={data.pdfName}
          pdfUrl={data.pdfUrl}
          trigger={
            <Button
              variant="outline"
              className="absolute right-4 top-3 rounded-md"
              size="icon"
            >
              <IconFile className="size-6" />
            </Button>
          }
        />
      </div>
    </>
  );
}

const messages: { id: number; role: "user" | "system"; message: string }[] = [
  {
    id: 1,
    role: "user",
    message: `Hello there! I just wanted to reach out and discuss some of the things that have been on my mind.
I feel that it's really important to address these issues now before they become bigger problems.
Communication is key, and I believe that a good dialogue can solve a lot of potential conflicts.
What do you think about that? I'd love to hear your thoughts on this topic.
Let’s make sure we’re on the same page moving forward.`,
  },
  {
    id: 2,
    role: "system",
    message: `Thank you for reaching out with your thoughts and taking the time to start this conversation.
It’s true that clear communication can prevent misunderstandings and foster better relationships.
I agree that addressing concerns early is always beneficial to maintain harmony.
Rest assured, your input is valuable and taken into consideration for future improvements.
Please continue to share any insights or questions you have as we proceed.`,
  },
  {
    id: 3,
    role: "user",
    message: `I noticed that there have been some changes in the platform lately, and I'm a bit unsure how to navigate them.
The interface seems to have been updated, which is great, but I need a bit of guidance on some new features.
Could you provide an overview or a step-by-step guide to help me get started?
It would be helpful to understand how to make the most of these new tools.
I really appreciate any tips or support you can offer!`,
  },
  {
    id: 4,
    role: "system",
    message: `We understand that adapting to new changes can sometimes be challenging, and we’re here to help.
Our team has prepared a detailed user guide that covers all the recent updates and features.
This guide includes step-by-step instructions and visual aids for easier comprehension.
You can access the guide in the Help Center or reach out for further assistance.
Feel free to ask any specific questions if you need more personalized guidance.`,
  },
  {
    id: 5,
    role: "user",
    message: `I've been trying to implement some new strategies to boost productivity within my team.
There are several obstacles that we need to overcome, such as aligning schedules and managing resources effectively.
One of the ideas I have involves using collaborative tools to improve workflow efficiency.
However, I'm not sure which tools would be best suited for our needs.
Any recommendations or advice would be greatly appreciated!`,
  },
  {
    id: 6,
    role: "system",
    message: `It’s great to hear that you’re actively working on enhancing productivity within your team.
Choosing the right tools can make a significant difference in workflow management and collaboration.
We recommend exploring options like project management software such as Trello or Asana, and communication tools like Slack.
Each of these tools comes with unique features that can help streamline processes and improve efficiency.
We’re here to provide more detailed insights or demos if you would like more information.`,
  },
  {
    id: 7,
    role: "user",
    message: `I wanted to provide some feedback on the recent project updates that have been rolled out.
Overall, I think the improvements are heading in the right direction, and many of them are beneficial.
However, there are still a few aspects that could use refinement for better usability.
For example, certain elements feel less intuitive than before, and it takes extra time to adjust.
Could we discuss potential solutions or modifications that could enhance the user experience?`,
  },
  {
    id: 8,
    role: "system",
    message: `We appreciate your valuable feedback on the recent updates and your willingness to share constructive insights.
User experience is a priority, and your input helps us identify areas for refinement.
We’ll review the elements you mentioned and consider adjustments to make them more user-friendly.
In the meantime, please continue to share any suggestions or pain points you encounter.
Together, we can work toward making the platform even better for everyone.`,
  },
  {
    id: 9,
    role: "user",
    message: `Thanks for your continued support and quick responses. It really makes a difference to know that feedback is heard.
I believe this proactive approach is what helps drive continuous improvement within the system.
While not everything is perfect, I do see the progress being made and appreciate it.
I’ll keep an eye out for any updates and share more feedback as things develop.
Your dedication to refining the user experience is commendable.`,
  },
  {
    id: 10,
    role: "system",
    message: `Thank you for recognizing our efforts and taking the time to acknowledge them.
Continuous improvement is at the heart of what we do, and your feedback plays an essential role in guiding that process.
We’re dedicated to making meaningful updates that cater to our users’ needs and preferences.
As we continue to evolve, we look forward to more opportunities to collaborate with you.
Please don’t hesitate to reach out whenever you have more thoughts or ideas to share.`,
  },
];
