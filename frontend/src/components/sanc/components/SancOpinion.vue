<template>
    <section>
        <div>
            <table>
                <colgroup>
                    <col width="100px"/>
                    <col width="*"/>
                </colgroup>
                <tbody>
                    <tr>
                        <td>의견</td>
                        <td><textarea v-model="opinion"></textarea></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox" checked="checked" value="1" name="checkOpnion"/> </td>
                    </tr>
                    <tr>
                        <td>결재암호</td>
                        <td><input type="password" name="inputSancPwd"/> </td>
                    </tr>
                    <tr v-if="view.parentSeqNum != null && view.parentSeqNum != ''">
                        <td>감사항목</td>
                        <td><input type="text" name="inputAuditItem"/> </td>
                    </tr>
                    <tr v-if="view.parentSeqNum != null && view.parentSeqNum != ''">
                        <td>감사금액</td>
                        <td><input type="text" name="inputAuditPrice"/> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    data : function(){
        return{
            opinion : "",
        }
    }
}
</script>

<style>

</style>
