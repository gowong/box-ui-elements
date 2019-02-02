/**
 * @flow
 * @file Versions sidebar component
 * @author Box
 */

import React from 'react';
import VersionHistoryLink from 'features/item-details/VersionHistoryLink';

import { DETAILS_TARGETS } from 'elements/common/interactionTargets';
import { isBoxNote } from 'utils/file';

type Props = {
    file: BoxItem,
    onVersionHistoryClick?: Function,
};

const SidebarVersions = ({ onVersionHistoryClick, file }: Props) => {
    const { version_number } = file;

    const versionNumber = parseInt(version_number, 10);

    if (isBoxNote(file) || !versionNumber || versionNumber <= 1) {
        return null;
    }

    return (
        <VersionHistoryLink
            data-resin-target={DETAILS_TARGETS.VERSION_HISTORY}
            onClick={onVersionHistoryClick}
            versionCount={versionNumber}
        />
    );
};

export default SidebarVersions;