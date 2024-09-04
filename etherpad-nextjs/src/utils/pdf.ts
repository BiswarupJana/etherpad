import { PDFDocument } from 'pdf-lib';

export const createPDF = async (content: string) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  page.drawText(content, { x: 20, y: 350, size: 12 });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};
