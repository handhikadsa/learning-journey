"use server";

import { revalidatePath } from "next/cache";
import { resolve } from "styled-jsx/css";
import { z } from "zod";

export async function createTodo(
    prevState,
    formData,
) {


    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    }

    const schema = z.object({
        name:  z.string().min(1),
        email:  z.string().min(1),
        phone:  z.string().min(1),
        message:  z.string().min(1),
    });

    const parse = schema.safeParse(rawFormData);
    console.log(parse)
    if (!parse.success) {
      return { message: "Failed to create todo" };
    }
  

    const data = parse.data;

    try {
        await new Promise(resolve => setTimeout(resolve, 3000))
        revalidatePath("/about");
        return { message: `Added submission ${data.name}` };
    } catch (e) {
        console.log(e)
        return { message: "Failed to create submission" };
    }
}

export async function deleteTodo(
    prevState,
    formData,
) {
    console.log({ formData })
    // const schema = z.object({
    //     id: z.string().min(1),
    //     todo: z.string().min(1),
    // });
    // const data = schema.parse({
    //     id: formData.get("id"),
    //     todo: formData.get("todo"),
    // });

    try {

        revalidatePath("/");
        return { message: `Deleted todo ${data.todo}` };
    } catch (e) {
        return { message: "Failed to delete todo" };
    }
}