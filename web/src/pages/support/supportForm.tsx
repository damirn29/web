import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Document, Page, Text, View, StyleSheet, Image, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

interface MyDocumentProps {
    name: string;
    picture: string;
}

const MyDocument = ({ name, picture }: MyDocumentProps) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Support Request</Text>
            </View>
            <View style={styles.section}>
                <Text>{name}</Text>
            </View>
            <View style={styles.section}>
                {picture && <Image src={picture} />}
            </View>
        </Page>
    </Document>
);

interface IMyForm {
    name: string;
    picture: FileList;
}

export const SupportForm = () => {
    const [task, setTask] = useState<{ name: string; picture: string } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IMyForm>({
        mode: "onBlur",
    });

    const saveElement = (data: IMyForm) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setTask({ name: data.name, picture: reader.result as string });
        };
        reader.readAsDataURL(data.picture[0]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveElement)}>
                <input {...register('name', { required: "This field is required", minLength: 5 })} />
                <input type="file" accept="image/*" {...register("picture", { required: true })} />
                <div>{errors.name?.message}</div>
                <button type="submit">Submit</button>
            </form>
            {task && (
                <>
                    <PDFDownloadLink
                        document={<MyDocument name={task.name} picture={task.picture} />}
                        fileName="support-request.pdf">
                        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
                    </PDFDownloadLink>
                    <BlobProvider document={<MyDocument name={task.name} picture={task.picture} />}>
                        {({ url, loading, error }) => {
                            if (error) {
                                return <div>An error occurred while generating the PDF preview</div>;
                            }
                            return loading ? <div>Loading preview...</div> : <iframe src={url || undefined} style={{ width: '100%', height: '500px' }} />;
                        }}
                    </BlobProvider>
                </>
            )}
        </div>
    );
};
