import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

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
        setSubmitError("Не удалось подключиться. Проверьте данные и попробуйте снова.");
      }
    } catch {
      setSubmitError("Не удалось подключиться. Попробуйте снова.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {!onOpenChange && !isOpen && (
        <DialogTrigger asChild>
          <Button className="flex-1" variant="ghost" color="secondary" size="sm">Войти</Button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Подключение к игре</DialogTitle>
          <DialogDescription>Введите название комнаты и имя</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            {!roomIdProp && (
              <FormField
                control={form.control}
                name="roomId"
                rules={{ required: "Введите название комнаты" }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Название комнаты"
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
              rules={{ required: "Введите имя" }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Имя"
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
                {form.formState.isSubmitting ? "Подключение..." : "Войти"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ConnectDialog;