import { Avatar } from 'react-md';
import { uniq } from 'lodash';
import React from 'react';

import { getSymbolSpan } from '../../helpers/symbolHelper';
import ArchiveCard from '../ArchiveCard';
import SidebarHeader from '../SidebarHeader';
import useAllToolboxNodes from '../../hooks/useAllToolboxNodes';

const ToolboxArchive = () => {
  const nodes = useAllToolboxNodes();
  const types = uniq(nodes.map(node => node.frontmatter.toolboxType));
  const sections = types.map((toolboxType) => {
    const nodesForType = nodes.filter(node => node.frontmatter.toolboxType === toolboxType);
    return {
      primaryText: toolboxType,
      items: nodesForType.map(node => ({
        primaryText: node.frontmatter.title,
        slug: node.fields.slug,
        avatar: (<Avatar>{getSymbolSpan(node.frontmatter.title)}</Avatar>),
      })),
    };
  });

  return (
    <div style={{ marginBottom: 30, marginTop: 20 }}>
      <SidebarHeader title="Elements of the Zodiac" />
      <div>
        <ArchiveCard sections={sections} />
      </div>
    </div>
  );
};

export default ToolboxArchive;
