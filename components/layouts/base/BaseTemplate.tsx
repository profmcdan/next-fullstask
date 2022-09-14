import React from "react";
import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
    message: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ message }) => {
    return <div className="{styles.container}">{message}</div>
}

export default BaseTemplate;