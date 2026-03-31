import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "@/i18n/client";

interface ConnectDialogProps {
  game: string;
  roomIdProp?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  handleSubmit: ({ game, roomId, name }: { game: string; roomId?: string; name?: string }) => void | boolean | Promise<void | boolean>;
}

interface ConnectDialogValues {
  roomId: string;
  name: string;
}

const ConnectDialog:FC<ConnectDialogProps> = ({ game, roomIdProp, isOpen, onOpenChange, handleSubmit }) => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const connect = useTranslation("connect");

  const form = useForm<ConnectDialogValues>({
    defaultValues: {
      roomId: roomIdProp ?? "",
      name: "",
    },
  });

  const onSubmit = async (values: ConnectDialogValues) => {
    try {
      setSubmitError(null);

      const submitResult = await handleSubmit({
        game,
        roomId: roomIdProp ?? values.roomId,
        name: values.name,
      });

      if (submitResult === false) {
        setSubmitError(connect.errorCheck);
      }
    } catch {
      setSubmitError(connect.errorGeneric);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {!onOpenChange && !isOpen && (
        <DialogTrigger asChild>
          <Button className="flex-1" variant="ghost" color="secondary" size="sm">{connect.submit}</Button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{connect.title}</DialogTitle>
          <DialogDescription>{connect.description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            {!roomIdProp && (
              <FormField
                control={form.control}
                name="roomId"
                rules={{ required: connect.roomRequired }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={connect.roomPlaceholder}
                        {...field}
                        onChange={(e) => {
                          setSubmitError(null);
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="name"
              rules={{ required: connect.nameRequired }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={connect.namePlaceholder}
                      {...field}
                      onChange={(e) => {
                        setSubmitError(null);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {submitError && <p className="text-sm text-destructive">{submitError}</p>}
            <DialogFooter>
              <Button variant="default" color="primary" size="sm" type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? connect.submitting : connect.submit}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ConnectDialog;
