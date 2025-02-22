import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateTaskForm from "./create-task-form";

const CreateTaskDialog = (props: { projectId?: string }) => {
  return (
    <div >
      <Dialog modal={true}>
        <DialogTrigger>
          <Button className="bg-blue-950">
            <Plus />
            New Stories
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg max-h-auto my-5 border-0 bg-blue-950">
          <CreateTaskForm projectId={props.projectId} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTaskDialog;
