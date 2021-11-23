import React from 'react';
import { NextPage } from "next";
import DefaultLayout from "./layouts/DefaultLayout";
import MSCButton from "../components/MSCButton";
import MSCCard from "../components/MSCCard";
import { works } from "../constants/works";

const Work: NextPage = () => {
    return (
        <DefaultLayout title="WORK" heroTitle="Works" heroSubtitle="Projects made for clients, and for myself :)" hasHero>
            <section className="content-section">
                <div className="grid" id="projects">
                    { works.map((data, key) => {
                        return (
                            <MSCCard
                                key={ key }
                                title={ data.name }
                                description={ data.desc }
                                media={ `/img/` + data.media }
                                tags={ data.tags }
                            >
                                <MSCButton link={ data.link } type="filled"
                                           isDisabled={ data.link == null }>Visit</MSCButton>
                            </MSCCard>
                        );
                    }) }
                </div>
            </section>
        </DefaultLayout>
    );
};

export default Work;