import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsCategory } from "@/utils/doc_util";

export default function CategoriesPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsCategory(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
}
