import React from "react";
export interface ApplicationLogoProps {
    darkMode: boolean;
    applicationName: "console" | "operator" | "directpv" | "kes" | "subnet" | "subnetops" | "cloud" | "releases" | "vmbroker" | "eureka" | "kms" | "loadbalancer" | "index" | "cache" | "monitor" | "observe" | "missioncontrol" | "globalconsole" | "minio" | "enterprise";
    subVariant?: "simple" | "AGPL" | "standard" | "enterprise" | "new" | "enterpriseos" | "enterpriseosvertical";
    inverse?: boolean;
    onClick?: React.MouseEventHandler<any> | undefined;
}
