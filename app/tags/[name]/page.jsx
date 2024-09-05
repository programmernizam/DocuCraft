import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc_util";

export default function TagPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
}
