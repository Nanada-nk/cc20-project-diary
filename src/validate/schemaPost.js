import * as Yup from 'yup'

export const schemaPost = Yup.object({
    topic: Yup.string().max(200).required("Topic is require"),
    content: Yup.string().max(10000).required("Content is required"),
})