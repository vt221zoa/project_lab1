export const dynamic = 'force-dynamic';

import ProfileContent from "@/components/users/ProfileContent";
import ProfileMediaList from "@/components/users/(media_List)/ProfileMediaList";
import SectionInfo from "@/components/SectionInfo";

export default function ProfilePage() {
    return (
        <div>
            <SectionInfo text='Профіль' color='#03ff1e'/>
            <ProfileContent />
            <ProfileMediaList />
        </div>
    );
}